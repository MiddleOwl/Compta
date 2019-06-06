<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<title><?php echo $title ?></title>
        <link rel="stylesheet" href="static/fontawesome-free-5.7.1-web/css/all.min.css">
        <link rel="stylesheet" href="static/bootstrap-4.0.0-dist/css/bootstrap.min.css">
		<link rel="stylesheet/less" type="text/css" href="static/style.less"/>
	</head>
	
    <body class="d-flex flex-column justify-content-center align-items-center">
        <div class="col-lg-9 d-flex flex-column justify-content-center align-items-center">
            <?php print($content); ?>

            <script src="static/js/jquery-3.2.1.js"></script>
            <script src="static/bootstrap-4.0.0-dist/js/bootstrap.bundle.min.js"></script>
            <script src="static/js/less.min.js"></script>
            <script src="static/js/compta.js"></script>
        </div>
    </body>
</html>
