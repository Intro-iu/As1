const translations = {
    en: {
        homeText: "Home",
        aboutText: "About",
        loginTitle: "Login",
        accountPlaceholder: "Enter your account",
        passwordPlaceholder: "Enter your password",
        rememberPassword: "Remember Me",
        forgotPassword: "Forgot Password?",
        register: "Register",
        login: "Login",
        guestLogin: "Guest Login",
    },
    zh: {
        homeText: "主页",
        aboutText: "关于",
        loginTitle: "登录",
        accountPlaceholder: "输入您的账号",
        passwordPlaceholder: "输入您的密码",
        rememberPassword: "记住密码",
        forgotPassword: "忘记密码?",
        register: "注册",
        login: "登录",
        guestLogin: "游客登录",
    }
};

let currentLanguage = 'zh';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    updateTextContent();
}

function updateTextContent() {
    document.getElementById('home-text').textContent = translations[currentLanguage].homeText;
    document.getElementById('about-text').textContent = translations[currentLanguage].aboutText;
    document.getElementById('login-title').textContent = translations[currentLanguage].loginTitle;
    document.getElementById('account-placeholder').placeholder = translations[currentLanguage].accountPlaceholder;
    document.getElementById('password-placeholder').placeholder = translations[currentLanguage].passwordPlaceholder;
    document.getElementById('remember-password').textContent = translations[currentLanguage].rememberPassword;
    document.getElementById('forgot-password').textContent = translations[currentLanguage].forgotPassword;
    document.getElementById('register-btn').textContent = translations[currentLanguage].register;
    document.getElementById('login-btn').textContent = translations[currentLanguage].login;
    document.getElementById('guest-login-btn').textContent = translations[currentLanguage].guestLogin;
}

updateTextContent();

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
}
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
}

const width = window.innerWidth;
const height = window.innerHeight;

function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    // 如果是手机设备，修改样式
    document.querySelector('body').style.backgroundImage = 'url("Wallpaper-Mobile.png")'; // 修改背景图片
    document.getElementById('home-text').style.fontSize = '48px'; // 修改导航栏字体大小
    document.getElementById('about-text').style.fontSize = '48px'; // 修改导航栏字体大小
    document.getElementById('login-title').style.fontSize = '64px'; // 修改标题字体大小
    document.getElementById('tab').style.fontSize = '20px'; // 修改表格字体大小
    document.getElementById('title').style.fontSize = '48px'; // 修改标题字体大小
    document.getElementById('main').style.marginTop = '30%'; // 修改窗口上边距
    document.getElementById('main').style.width = '80%'; // 修改窗口宽度
    document.getElementById('main').style.height = 0.55 * height + 'px'; // 修改窗口高度
    document.getElementById('main').style.maxWidth = '2048px'; // 修改窗口最大宽度
    document.getElementById('forgot-password').style.fontSize = '40px'; // 修改忘记密码字体大小
    document.getElementById('account-placeholder').style.fontSize = '40px'; // 修改账号输入框字体大小
    document.getElementById('account-placeholder').style.height = '100px'; // 修改账号输入框高度
    document.getElementById('password-placeholder').style.fontSize = '40px'; // 修改密码输入框字体大小
    document.getElementById('password-placeholder').style.height = '100px'; // 修改密码输入框高度
    document.getElementById('box').style.width = '45px'; // 修改复选框宽度
    document.getElementById('box').style.height = '45px'; // 修改复选框高度
    document.getElementById('remember-password').style.fontSize = '40px'; // 修改记住密码字体大小
    document.getElementById('register-btn').style.fontSize = '40px'; // 修改注册按钮字体大小
    document.getElementById('register-btn').style.height = '100px'; // 修改注册按钮高度
    document.getElementById('login-btn').style.fontSize = '40px'; // 修改登录按钮字体大小
    document.getElementById('login-btn').style.height = '100px'; // 修改登录按钮高度
    document.getElementById('guest-login-btn').style.fontSize = '40px'; // 修改游客登录按钮字体大小
    document.getElementById('guest-login-btn').style.height = '100px'; // 修改游客登录按钮高度
    document.getElementById('languageSwitcher').style.scale = '2'; // 修改语言切换按钮大小
    document.getElementById('themeSwitcher').style.scale = '2'; // 修改主题切换按钮大小
}