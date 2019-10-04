<!doctype html>
<html>
	<head>
		<title>1223-B BUSAY HOMEOWNERS ASSOCIATION</title>
		<link rel="stylesheet" href="assets/css/w3.css"/>
		<script src="assets/js/angular.min.js"></script>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<style>
			.mybar{
				background-color:green;
				padding:5px;
				background-repeat:repeat
			}
		</style>
	</head>
	<body ng-app="app" ng-controller="ctrl">
		<div class="w3-white w3-row">
			<img src="assets/img/bhoa_small.png" width="150px">
			
			<div class="w3-bar w3-green">&nbsp;</div>
		</div>
		<div class="w3-row">
			<br>
			<div class="w3-container">
				<input type="text" class="w3-padding w3-right" placeholder="Search..." ng-model="search">
			</div>
			<br>
			<table class="w3-table-all">
				<tr>
					<th ng-repeat="h in header" >{{ h }}</th>
				</tr>
				<tr ng-repeat="m in members | filter:search | orderBy:'lastname'">
					<td>
						<div class="w3-card" style="width:5%;height:20%">
							<img src="assets/img/bhoa_small.png" width="100px">
							<table width='100%'>
								<tr><td background='assets/img/bar.png'>&nbsp;</td></tr>
							</table>
							<div class="w3-container">
								<br>
								<center>
									<img src="../upload/{{m.image}}" width="100px">
									<h3>{{ m.name }}</h3>
								</center>
								
							</div>
						</div>
					</td>
				</tr>
			</table>
		</div>
		<div class="w3-modal" id="member_modal">
			<div class="w3-modal-content w3-animate-top" style='width:40%'>
				<div class="w3-container w3-green">
					<h3>MEMBER</h3>
					<button class="w3-button w3-display-topright" ng-click="closemodal()">&times;</button>
				</div>
				<div class="w3-container w3-white">
					<br>
					<center>
						<img ng-src="{{ image }}">
					</center>
					<br>
					<label><b>LASTNAME</b></label>
					<input type='text' class='w3-input w3-border' ng-model='lastname'>
					<label><b>FIRSTNAME</b></label>
					<input type='text' class='w3-input w3-border' ng-model='firstname'>
					<label><b>REPRESENTATIVE OF</b></label>
					<input type='text' class='w3-input w3-border' ng-model='repof'>
					<br>
					<button class='w3-button w3-blue w3-right'>SAVE</button>
					<br><br>
				</div>
			</div>
		</div>
	</body>
	<script>
		(function(){
			var app=angular.module('app',[]);
			app.controller('ctrl',function($http,$scope){
				$scope.header=['#','MEMBER ID','NAME','ACTION'];
				
				$scope.closemodal=function(){
					document.getElementById('member_modal').style.display='none';
				}
				
				
				$scope.showmember=function(index){
					document.getElementById('member_modal').style.display='block';
					var member=$scope.members[index];
					$scope.lastname=member.lastname;
					$scope.firstname=member.firstname;
					$scope.image='../upload/'+member.image;
				}
				///
				
				$scope.deactivate=function(index){
					var member=$scope.members[index];
					var id=member.id;
					console.log(id);
					$http({
						url:'http://localhost:8081/BHOA/controller/deactivate.php?id='+id,
						method:'GET'
					}).then(function(response){
						alert('Member DEActivated');
					});
				}
				
				$http({
					url:'http://localhost:8081/BHOA/controller/getallactive.php',
					method:'GET'
				}).then(function(response){
					$scope.members = response.data;
				});
				
			});
		})()
		
	</script>
</html>
