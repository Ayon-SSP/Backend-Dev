

```html
<!DOCTYPE html>
<html>
<body>

<h2>Radio Buttons</h2>

<p>Choose your favorite Web language:</p>

<form>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
</form> 

<p id="selectedLanguage"></p>

<script>
  const selectedLanguage = document.getElementById('selectedLanguage');
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  
  radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
      // Check which radio button is selected
      radioButtons.forEach(function(radio) {if (radio.checked) {selectedLanguage.textContent = "Selected language: " + radio.value;}});
    });
  });
</script>

</body>
</html>
```
```html
<!DOCTYPE html>
<html>
<body>

<h2>Radio Buttons</h2>

<p>Choose your favorite Web language:</p>

<form>
  <input type="radio" id="html" name="fav_language" value="HTML" onchange="displaySelectedLanguage(this)">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS" onchange="displaySelectedLanguage(this)">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript" onchange="displaySelectedLanguage(this)">
  <label for="javascript">JavaScript</label>
</form> 

<p id="selectedLanguage"></p>

<script>
  function displaySelectedLanguage(radioButton) {
    document.getElementById('selectedLanguage').textContent = "Selected language: " + radioButton.value;
  }
</script>

</body>
</html>
```