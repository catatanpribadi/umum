document.addEventListener("DOMContentLoaded", function () {
  const runEvery = 3; // ubah dari 5 menjadi 3
  const key = "histatsRunCounter";

  let counter = parseInt(localStorage.getItem(key) || "0", 10) + 1;
  localStorage.setItem(key, counter);

  if (counter % runEvery !== 0) return;

  const prefixList = ['HstCfa', 'HstCla', 'HstCmu', 'HstCns', 'HstCnv', 'HstPn', 'HstPt'];

  const cookies = document.cookie.split(';');
  cookies.forEach(function(cookie) {
    const name = cookie.split('=')[0].trim();
    if (prefixList.some(prefix => name.startsWith(prefix))) {
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }
  });
});
