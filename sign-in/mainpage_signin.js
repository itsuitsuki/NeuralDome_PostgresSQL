// 获取登录按钮元素
const loginBtn = document.getElementById('login-btn');

// 添加点击事件监听器
loginBtn.addEventListener('click', function () {
    // 在这里添加打开登录页面的代码
    alert('Login')
    window.open('/sign-in/login.html', '_blank');
});

// 检查token是否存在并更新按钮状态
const token = localStorage.getItem('token');

if (token) {
    loginBtn.innerText = 'Logout';
} else {
    loginBtn.innerText = 'Login';
}

// 添加注销功能
loginBtn.addEventListener('click', function () {
    if (loginBtn.innerText === 'Logout') {
        // 清除localStorage中的token
        localStorage.removeItem('token');

        // 刷新页面
        location.reload();
    } else {
        // 打开登录页面
        window.open('login.html', '_blank');
    }
});