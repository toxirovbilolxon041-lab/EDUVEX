import { User, TestResult } from '../types';

// SHA-256 hashing using the browser's native Web Crypto API
export async function hashPassword(password: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

const STORAGE_USERS_KEY = 'eduvex_users_db_v1';
const STORAGE_CURRENT_USER_KEY = 'eduvex_current_user_id';

// Default initial kid demo users
const INITIAL_DEMO_USERS: User[] = [
  {
    id: 'user_jasur_11',
    username: 'jasurbek',
    firstName: 'Jasurbek',
    lastName: 'Toshmatov',
    age: 11,
    // SHA-256 of "eduvex123"
    passwordHash: 'c7c2525414f52f36f6db6a2a514d59f21f78c850239cf2454a88746e8c792193',
    avatar: '🚀',
    totalPoints: 240,
    completedTestsCount: 3,
    bestScorePercentage: 90,
    achievements: ['first_step', 'math_genius', 'sharp_mind'],
    createdAt: '2026-09-15T10:00:00.000Z',
    lastActive: new Date().toISOString(),
  },
  {
    id: 'user_malika_10',
    username: 'malika',
    firstName: 'Malika',
    lastName: 'Karimova',
    age: 10,
    passwordHash: 'c7c2525414f52f36f6db6a2a514d59f21f78c850239cf2454a88746e8c792193',
    avatar: '🌟',
    totalPoints: 180,
    completedTestsCount: 2,
    bestScorePercentage: 100,
    achievements: ['first_step', 'perfect_score'],
    createdAt: '2026-10-01T12:00:00.000Z',
    lastActive: new Date().toISOString(),
  },
];

export class AuthService {
  private static getUsers(): User[] {
    const raw = localStorage.getItem(STORAGE_USERS_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(INITIAL_DEMO_USERS));
      return INITIAL_DEMO_USERS;
    }
    try {
      return JSON.parse(raw);
    } catch {
      return INITIAL_DEMO_USERS;
    }
  }

  private static saveUsers(users: User[]) {
    localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
  }

  public static getCurrentUser(): User | null {
    const currentId = localStorage.getItem(STORAGE_CURRENT_USER_KEY);
    if (!currentId) return null;
    const users = this.getUsers();
    return users.find((u) => u.id === currentId) || null;
  }

  public static async login(username: string, plainPass: string): Promise<{ success: boolean; error?: string; user?: User }> {
    const cleanUsername = username.trim().toLowerCase();
    if (!cleanUsername || !plainPass) {
      return { success: false, error: 'empty_fields' };
    }

    const users = this.getUsers();
    const user = users.find((u) => u.username.toLowerCase() === cleanUsername);

    if (!user) {
      return { success: false, error: 'user_not_found' };
    }

    const hash = await hashPassword(plainPass);
    if (user.passwordHash !== hash) {
      return { success: false, error: 'wrong_password' };
    }

    // Update last active
    user.lastActive = new Date().toISOString();
    this.saveUsers(users);

    localStorage.setItem(STORAGE_CURRENT_USER_KEY, user.id);
    return { success: true, user };
  }

  public static async register(data: {
    firstName: string;
    lastName: string;
    username: string;
    age: 10 | 11 | 12;
    password: string;
    confirmPassword: string;
  }): Promise<{ success: boolean; error?: string; user?: User }> {
    const firstName = data.firstName.trim();
    const lastName = data.lastName.trim();
    const username = data.username.trim().toLowerCase();

    if (!firstName || !lastName || !username || !data.password) {
      return { success: false, error: 'empty_fields' };
    }

    if (username.length < 3) {
      return { success: false, error: 'username_too_short' };
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return { success: false, error: 'username_invalid_chars' };
    }

    if (![10, 11, 12].includes(data.age)) {
      return { success: false, error: 'invalid_age' };
    }

    if (data.password.length < 4) {
      return { success: false, error: 'password_too_short' };
    }

    if (data.password !== data.confirmPassword) {
      return { success: false, error: 'passwords_mismatch' };
    }

    const users = this.getUsers();
    if (users.some((u) => u.username.toLowerCase() === username)) {
      return { success: false, error: 'username_taken' };
    }

    const passwordHash = await hashPassword(data.password);
    const avatars = ['🚀', '🦊', '🦁', '🌟', '🐬', '🦉', '⚡', '🎨'];
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

    const newUser: User = {
      id: `user_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      username,
      firstName,
      lastName,
      age: data.age,
      passwordHash,
      avatar: randomAvatar,
      totalPoints: 50, // Welcome points for signing up
      completedTestsCount: 0,
      bestScorePercentage: 0,
      achievements: ['first_step'],
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString(),
    };

    users.push(newUser);
    this.saveUsers(users);
    localStorage.setItem(STORAGE_CURRENT_USER_KEY, newUser.id);

    return { success: true, user: newUser };
  }

  public static logout() {
    localStorage.removeItem(STORAGE_CURRENT_USER_KEY);
  }

  public static updateUserProfile(userId: string, updates: Partial<Pick<User, 'firstName' | 'avatar' | 'age'>>): User | null {
    const users = this.getUsers();
    const index = users.findIndex((u) => u.id === userId);
    if (index === -1) return null;

    users[index] = { ...users[index], ...updates };
    this.saveUsers(users);
    return users[index];
  }

  // Multi-user segregated test results
  public static getUserResults(userId: string): TestResult[] {
    const raw = localStorage.getItem(`eduvex_results_${userId}`);
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }

  public static recordTestResult(result: TestResult): { user: User; newAchievements: string[] } {
    const users = this.getUsers();
    const userIndex = users.findIndex((u) => u.id === result.userId);
    if (userIndex === -1) {
      throw new Error('User not found');
    }

    const user = users[userIndex];
    const prevResults = this.getUserResults(result.userId);

    // Save test result in user-specific storage
    const newResults = [result, ...prevResults];
    localStorage.setItem(`eduvex_results_${result.userId}`, JSON.stringify(newResults));

    // Update user stats
    // Note: Fair point system: User gains points for the test
    const newTotalPoints = user.totalPoints + result.pointsEarned;
    const newCompletedCount = user.completedTestsCount + 1;
    const newBestPercentage = Math.max(user.bestScorePercentage, result.percentage);

    // Evaluate badges / achievements
    const newlyEarnedBadges: string[] = [];
    const currentBadges = new Set(user.achievements);

    if (result.percentage === 100 && !currentBadges.has('perfect_score')) {
      currentBadges.add('perfect_score');
      newlyEarnedBadges.push('perfect_score');
    }
    if (newTotalPoints >= 200 && !currentBadges.has('point_master')) {
      currentBadges.add('point_master');
      newlyEarnedBadges.push('point_master');
    }
    if (newTotalPoints >= 500 && !currentBadges.has('grand_scholar')) {
      currentBadges.add('grand_scholar');
      newlyEarnedBadges.push('grand_scholar');
    }
    if (newCompletedCount >= 5 && !currentBadges.has('speedy_solver')) {
      currentBadges.add('speedy_solver');
      newlyEarnedBadges.push('speedy_solver');
    }
    if (result.subjectId === 'math' && result.percentage >= 80 && !currentBadges.has('math_genius')) {
      currentBadges.add('math_genius');
      newlyEarnedBadges.push('math_genius');
    }
    if (result.subjectId === 'it' && result.percentage >= 80 && !currentBadges.has('cyber_coder')) {
      currentBadges.add('cyber_coder');
      newlyEarnedBadges.push('cyber_coder');
    }
    if (result.subjectId === 'science' && result.percentage >= 80 && !currentBadges.has('cosmic_explorer')) {
      currentBadges.add('cosmic_explorer');
      newlyEarnedBadges.push('cosmic_explorer');
    }

    user.totalPoints = newTotalPoints;
    user.completedTestsCount = newCompletedCount;
    user.bestScorePercentage = newBestPercentage;
    user.achievements = Array.from(currentBadges);
    user.lastActive = new Date().toISOString();

    users[userIndex] = user;
    this.saveUsers(users);

    return { user, newAchievements: newlyEarnedBadges };
  }

  // Answer Daily Question
  public static recordDailyQuestionPoints(userId: string, points: number): User | null {
    const users = this.getUsers();
    const userIndex = users.findIndex((u) => u.id === userId);
    if (userIndex === -1) return null;

    const user = users[userIndex];
    user.totalPoints += points;
    if (!user.achievements.includes('daily_champion')) {
      user.achievements.push('daily_champion');
    }
    user.lastActive = new Date().toISOString();

    users[userIndex] = user;
    this.saveUsers(users);
    return user;
  }
}
