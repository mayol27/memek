<?php
	if(isset($_GET['id']) && isset($_GET['name'])){
		$id=$_GET['id'];
		$name=$_GET['name'];
		$repof=$_GET['repof'];
		if($repof!="") $name=$repof;
?>
<!doctype html>
<html>
	<head>
		<title>1223-B Busay Homeowners Association</title>
		<link rel="stylesheet" href="assets/css/w3.css" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
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
		<br>
		<div class="w3-card w3-white w3-bordered" style="width:90%;margin:auto">
			<center>
				<img src="assets/img/BHOA_cropped1.png" width="250px">
				
			</center>
			<table width='100%'>
				<tr><td background='assets/img/bar.png'>&nbsp;</td></tr>
			</table>
			<div class="w3-container">
				<br><br><br><br><br>
				<center>
					<h1 style="font-size:46px">CERTIFICATE OF MEMBERSHIP</h1>
					<p style="font-size:20px">
						<br>
						<p>
							<h4>
								This is to certify that
							</h4>
						</p>
						<br><br>
						<h2><b><?php echo $name?></b></h2>
						<br><br>
						<p>
							<h4>
							<blockquote>
							is a bonafide member of <b>LOT 1223-B BUSAY HOMEOWNERS ASSOCIATION.</b><br>
							Awarded this 28th of July, 2019 at the St.Joseph Chapel,<br>
							Sitio Tanguili, Barangay Busay, Cebu City.<br><br>
							This certificate was awarded by:
							</blockquote>
							</h4>
						</p>
					</p>
					<br><br>
					<h4>
						<b>MAGDALENO M. LUGOD</b><br>
					President
					</h4>
					<br><br>
				</center>
			</div><br>
			<div id="qrcode" style="margin-left:20px"></div>
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
					<div style="margin-left:20px;font-size:10px">
					<?php echo $id?>
					</div>
			<br>
			<br>
		</div>
	</body>
	<script type="text/javascript"></script>
</html>
<?php
	}
?>