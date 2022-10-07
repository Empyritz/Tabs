const tabs = document.querySelectorAll('[data-tab-target]');
const tabsContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabsContents.forEach((tabContent) => tabContent.classList.remove('content-active'));
    target.classList.add('content-active');
    tabs.forEach((tab) => tab.classList.remove('option-active'));
    e.currentTarget.classList.add('option-active');
  });
});
