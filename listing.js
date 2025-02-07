function setCondition(condition) {
    document.getElementById('condition').value = condition;
    document.querySelectorAll('#condition-group button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  }

  function setPriceType(type) {
    document.getElementById('price-type').value = type;
    document.querySelectorAll('.btn-group button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  }

  function uploadPhoto() {
    document.getElementById('photos').click();
  }

  function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById('list-item-form'));
    fetch('https://api.example.com/list-item', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => alert('Item listed successfully!'))
      .catch(error => console.error('Error:', error));
  }