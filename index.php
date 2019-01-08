<?php
	if(isset($_GET['page']) && file_exists("controllers/".$_GET['page'].".php")){
		include("controllers/".$_GET['page'].".php");
	}
	else{
		include("controllers/accueil.php");
	}
?>