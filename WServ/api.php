<!DOCTYPE html>
<html>
<head>
  <title>Lector JSON</title>
  <script
  src="https://code.jquery.com/jquery-2.2.4.js"
  integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
  crossorigin="anonymous"></script>
  <script type="text/javascript">
    $.getJSON("gen.php", function(json){
      $("#res").text(json.empleados[1].nombre);
    })
  </script>
</head>
<body>
  <span id="res">NADA</span>
</body>
</html>