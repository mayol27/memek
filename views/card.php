<?php
	if(isset($_GET['id']) && isset($_GET['name'])){
		$id=$_GET['id'];
		$name=$_GET['name'];
		$image=$_GET['image'];
	
?>
<!doctype html>
<html>
	<head>
		<title>1223-B Busay Homeowners Association</title>
		<link rel="stylesheet" href="assets/css/w3.css" />
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		<script src="assets/qrcode/jquery.js"></script>
		<script src="assets/qrcode/qrcode.js"></script>
		<script src="assets/qrcode/qrcode.min.js"></script>
		<style>
			.mybar{
				background-color:green;
				padding:5px;
				background-repeat:repeat
			}
		</style>
	</head>
	<body>
		<div class="w3-card w3-bordered" style="width:30%;height:40%">
			<img src="assets/img/bhoa_small.png" width="100px">
			<table width='100%'>
				<tr><td background='assets/img/bar.png'>&nbsp;</td></tr>
			</table>
			<div class="w3-container">
				<br>
				<center>
					<img src="../upload/<?php echo $image?>" width="150px">
					<h3 class="w3-medium"><b><?php echo $name?></b></h3>
					<div id="qrcode"></div>
					<script type="text/javascript">
						var qrcode = new QRCode(document.getElementById("qrcode"), {
							text: "<?php echo $id ?>",
							width: 70,
							height: 70,
							colorDark : "#000000",
							colorLight : "#ffffff",
							correctLevel : QRCode.CorrectLevel.H
						});
					</script>
					<?php echo $id?>
					<div class="w3-tiny">
						Bonafide member of LOT 1223-B Busay Homeowners Association 
					</div>
					<div class="w3-tiny"><b>(HLURB REGISTRATION:HOA-CVR-18-0061)</b></div>
					
					___________________<br>
					<div class="w3-tiny"> Member Signature</div>
					
				
				</center>
				
			</div>
		</div>
	</body>
	<script type="text/javascript">
	</script>
</html>
<?php
	}
?>