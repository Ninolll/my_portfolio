function toggleLanguage() {
  const body = document.body;
  const btn = document.getElementById("lang-btn");

  // 如果当前有 'cn' 这个类，说明是中文模式 -> 切换回英文
  if (body.classList.contains("cn")) {
    body.classList.remove("cn");
    btn.innerText = "中文"; // 按钮显示“中文”，引导用户切换去中文
  } else {
    // 否则 -> 切换成中文模式
    body.classList.add("cn");
    btn.innerText = "English"; // 按钮显示“English”，引导用户切换回英文
  }
}
