<?php 

$dir = "./images/";
$pageTitle = "COMP PREVIEWER";
$images = glob($dir . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);
$long = strlen($dir);

?><!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title><?php echo $pageTitle;?></title>	
	<link rel="stylesheet" type="text/css" href="resources/css/style.css" />	
	<script type="text/javascript" src="resources/js/jquery.js"></script>	
	<script type="text/javascript" src="resources/js/jquery.address.js"></script>
	<script type="text/javascript" src="resources/js/main.js"></script>

</head>


<body>
	 <div id="image_container"></div>
	<a id="arrow-left" class="arrow" href="#">
		<img src="resources/images/arrow-left.png" />
	</a>
	<a id="arrow-right" class="arrow" href="#">
		<img src="resources/images/arrow-right.png" />
	</a>

	<div id="nav">
		<a id="tab" class="right" href="#"></a>
		<a id="logo" href="#" target="_blank"><img src="resources/images/logo.png" /></a>
		<hr />
		<ul>          
		<?php 
		$x=0;
		foreach($images as $img){  ?>
			<li><a href="<?php echo $img; ?> " rel="address:/<?=$x?>"><?php echo substr($img,$long); ?></a></li>
	   <?php $x++;	}  ?>
           
		</ul>
	</div>
	
	<div id="comp-container">
		<div id="comp">
			<img src=""/>			
		</div>
	</div>
</body>
</html>