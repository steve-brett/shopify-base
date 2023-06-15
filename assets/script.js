// dialog
document.querySelectorAll('[data-dialog]').forEach((dialog) => {
  const triggers = document.querySelectorAll('[href="#'+dialog.id+'"],[data-dialog-trigger="'+dialog.id+'"]');

  // trigger open
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      dialog.scrollTo({ top: 0 });
      dialog.showModal();
    });
  });

});