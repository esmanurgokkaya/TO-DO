<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
  <header class="header">
    <div class="calender hidden">
      <i class="fa-solid fa-calendar-days"></i>
      <span>calender</span>
      
    </div>
    <div class="login ">
      <i class="fa-solid fa-user"></i>
      <span>login</span>
      <!-- <span>logout</span>
      <span>name</span> -->
    </div>

  </header>

  <section>
    <form action="">
      <button class="addButton"><i class="fa-solid fa-plus"></i></button>

          <div class="addingCategories" style="  display: none;
">
            <input type="text" id="cat" class="categInput">
            <input type="button" value="ADD" id="addCateg">
          </div>

      <select name="categories" id="categories">
        <option value="1">1</option>  
        <option value="2">gfcvhasvchkvfkvc</option>
      <!-- dbden veri gelecek -->
      </select>
      <input type="text" id="mission" class="mission-box" />
      <input type="button" value="submit" id="send-box" />
    </form>
    <div class="categories">
      <div class="categ">
        <span>ALL</span>
      </div><div class="categ">
        <span>1</span>
      </div>
    </div>
    <div class="missions">
      <!-- js buraya görevleri yazdıracak -->
    </div>
  </section>
  <script src="script.js"></script>
</body>

</html>