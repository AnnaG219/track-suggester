<!DOCTYPE html>
<html>
  <head>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="css/styles.css" rel="stylesheet" type="text/css">
    <script src="js/jquery-3.3.1.js"></script>
    <script src="js/scripts.js"></script>
    <title>Survey!</title>
  </head>
  <body>
  <div class="container">
    <div>
      <form id="formOne">

        <div class="form-group">
          <label for="person1">What is you name? (First, Last)</label>
          <input id="person1" class="form-control" type="text">
        </div>

        <div class="form-group">
          <label for="state">What State do you live in?</label>
          <input id="state" class="form-control" type="text">
        </div>
      </form>
    </di
    <div class="radio">
      <label>
        <input type="radio" name="flavor" value="chocolate" checked>
        Chocolate
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="flavor" value="grape">
        grape
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="flavor" value="apple">
        apple
      </label>
    </div>

    <div class="radio">
      <label>
        <input type="radio" name="flavor" value="cherry" checked>
        cherry
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="flavor" value="banana">
        banana
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="flavor" value="orange">
        orange
      </label>
    </div>
    <div class="form-group">
      <label for="born">Date of birth:</label>
      <input id="born" class="form-control" type="date">
    </div>
    <div class="form-group">
      <label for="color">What is your favorite color?</label>
      <input id="color" class="form-control" type="color">
    </div>
  </div>
</body>
</html>
