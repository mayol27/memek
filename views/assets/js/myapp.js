(function(){
	'use strict'
	// Initialize Firebase
			  var config = {
				apiKey: "AIzaSyAZJvziI5GfbuvaLBfO9mVwfm4FRvpzqyM",
				authDomain: "psite7regcon18.firebaseapp.com",
				databaseURL: "https://psite7regcon18.firebaseio.com",
				projectId: "psite7regcon18",
				storageBucket: "psite7regcon18.appspot.com",
				messagingSenderId: "912998608929"
			  };
			  firebase.initializeApp(config);
				////
			var app=angular.module("app",['ngRoute','firebase']);
			app.config(function($routeProvider){
				$routeProvider.when("/",{
					templateUrl:"/views/main.html",
					controller:"registerctrl"
				});
				$routeProvider.when("/list",{
					resolve:{
					"check":function($rootScope,$location){
							if(!$rootScope.logged){
								$location.path("/");
							}
						}
					},
					templateUrl:"/views/list.html",
					controller:"listctrl"
				});
				$routeProvider.when("/admin",{
					templateUrl:"/views/admin.html",
					controller:"adminctrl"
				});
				$routeProvider.when("/main",{
					templateUrl:"/views/main.html",
					controller:"registerctrl"
				});
				$routeProvider.when("/logout",{
					templateUrl:"/views/main.html",
					controller:"registerctrl"
				});
			});
			///
			app.controller("adminctrl",function($scope,$rootScope,$location){
			$rootScope.logged=false;			
				$scope.login=function(){
					if($scope.username=="admin" && $scope.password=="admin"){
						$rootScope.logged=true;
						$location.path("/list");
					}
				}
			});
			///
			app.service("Schools",function($firebaseArray){
				var names=[
					'ACLC College–Tagbilaran ',
					'ACLC College of Mandaue ',
					'AMA Computer College–Cebu ',
					'AMA Computer College-Dumaguete ',
					'Asian College of Science and Technology-Dumaguete ',
					'Asian College of Technology International Education Foundation ',
					'Bantayan Southern Institute ',
					'Baptist Theological College ',
					'Batuan Colleges ',
					'Benedicto College ',
					'Benthel Asia School of Technology Inc. ',
					'BIT International College–Carmen ',
					'BIT International College–Tagbilaran ',
					'BIT International College-Siquijor ',
					'BIT International College-Talibon ',
					'BIT International College-Jagna ',
					'Blessed Trinity College ',
					'Bohol International Learning College ',
					'Bohol Island State University–Balilihan ',
					'Bohol Island State University–Bilar ',
					'Bohol Island State University–Calape ',
					'Bohol Island State University–Candijay ',
					'Bohol Island State University–Clarin ',
					'Bohol Island State University–Tagbilaran ',
					'Bohol Northern Star College, Inc. ',
					'Bohol Northwestern Colleges ',
					'Bohol Wisdom School ',
					'Carmelite College of Siquijor ',
					'CBD College ',
					'Cebu Aeronautical Technical School ',
					'Cebu Doctors’ University ',
					'Cebu Doctors’ University College of Medicine ',
					'Cebu Eastern College ',
					'Cebu Institute of Medicine ',
					'Cebu Institute of Technology–University ',
					'Cebu Mary Immaculate College ',
					'Cebu Normal University ',
					'Cebu Roosevelt Memorial College ',
					'Cebu Sacred Heart College ',
					'Cebu School of Midwifery ',
					'Cebu Technological University–Argao ',
					'Cebu Technological University–Carmen ',
					'Cebu Technological University–Danao ',
					'Cebu Technological University–Main ',
					'Cebu Technological University–Moalboal ',
					'Cebu Technological University–San Francisco ',
					'Cebu Technological University–Tuburan ',
					'Central Philippine Bible College, Inc. ',
					'Centre for International Education Global Colleges ',
					'Colegio de San Antonio de Padua ',
					'Colegio de Santa Catalina de Alejandria ',
					'College of Technological Sciences–Cebu ',
					'Collegium Societatis Angeli Pacis ',
					'Concord Technical Institute ',
					'Cordova Public College ',
					'Consolatrix College of Toledo City ',
					'Cristal e-College Panglao ',
					'Cristal e-College Tagbilaran ',
					'De La Salle Andres Soriano Memorial College ',
					'Diaz College ',
					'Don Bosco Technology Center ',
					'Evangelical Theological College of the Philippines ',
					'Felipe R. Verallo Memorial Foundation-Bogo ',
					'Foundation University ',
					'Golden Success College ',
					'Holy Name University ',
					'Holy Trinity College ',
					'Immaculate Heart of Mary Seminary ',
					'Immanuel Bible College ',
					'Indiana School of Aeronautics ',
					'Informatics College Cebu ',
					'La Consolacion College–Bais ',
					'La Consolascion College–Lilo-an ',
					'Larmen de Guia Memorial College ',
					'Lyceum of Cebu ',
					'Mary Our Help Technical Institute for Women ',
					'Mary’s Children Formation College ',
					'Mater Dei College ',
					'Maxino College ',
					'Metro Dumaguete College ',
					'Microsystems International Institute of Technology ',
					'Mount Moriah College ',
					'Negros College ',
					'Negros Maritime Foundation ',
					'Negros Oriental State University-Bais I ',
					'Negros Oriental State University-Bais II ',
					'Negros Oriental State University-Bayawan ',
					'Negros Oriental State University-Guihulngan ',
					'Negros Oriental State University-Mabinay ',
					'Negros Oriental State University-Main ',
					'Negros Oriental State University-Siaton ',
					'Northeastern Cebu Colleges ',
					'Northern Cebu Colleges ',
					'Philippine State College of Aeronautics – Mactan Air Base ',
					'PMI Colleges-Bohol ',
					'Presbyterian Theological College ',
					'Professional Academy of the Philippines ',
					'Quezon Memorial Institute of Siquijor ',
					'Rizwoods College–N. Bacalso ',
					'Rizwoods College–Lapulapu ',
					'Rogationist Seminary College ',
					'Rosemont Hills Montesorri College ',
					'Royal Christian College ',
					'Saint Catherine’s College ',
					'Saint Francis College- Guihulngan ',
					'Saint Joseph College of Canlaon ',
					'Saint Loius De Marillac College–Bogo ',
					'Saint Louis College-Cebu ',
					'Salazar Colleges of Science and Institute of Technology–Madridejos ',
					'Salazar Colleges of Science and Institute of Technology, N. Bacalso Ave., Cebu City ',
					'Salazar Colleges of Science and Institute of Technology, Talisay City, Cebu ',
					'San Carlos Seminary College ',
					'Silliman University ',
					'Siquijor State College ',
					'Southwestern University ',
					'Southwestern University-Matias H.Aznar Memorial College of Medicine, Inc. ',
					'St. Cecilia’s College-Cebu ',
					'St. Joseph Seminary College ',
					'St. Paul College Foundation Inc.–Mandaue ',
					'St. Paul College Foundation Inc.-Bulacao ',
					'St. Paul University Dumaguete ',
					'St. Theresa’s College ',
					'STI College – Bohol (formerly STI College Tagbilaran) ',
					'STI College – Cebu ',
					'Sto. Tomas College ',
					'Tabor Hills College ',
					'Trade-Tech International Science Institute ',
					'University of Bohol ',
					'University of Cebu-Main',
					'University of Cebu–Banilad Campus ',
					'University of Cebu–Lapu-lapu and Mandaue ',
					'University of San Carlos',
					'University of San Jose-Recoletos ',
					'University of the Philippines–College of Cebu ',
					'University of the Southern Philippines Foundation ',
					'University of the Visayas ',
					'University of the Visayas–Dalaguete ',
					'University of the Visayas–Danao City ',
					'University of the Visayas–Gullas College of Medicine ',
					'University of the Visayas–Mandaue ',
					'University of the Visayas-Minglanilla ',
					'University of the Visayas-Toledo City Campus ',
					'Visayan Nazarene Bible College ',
					'VillaFlores College ',
					'Velez College ',
					'University of the Philippines College of Cebu',
				];
				var ref=firebase.database().ref().child("delegate");
				var delegates=$firebaseArray(ref);
				///
				this.list=function(){
					return names;
				}
				this.connect=function(){
					return delegates;
				}
				
			});
			///
			app.controller("registerctrl",function($scope,Schools,$firebaseArray){
				$scope.schools=Schools.list();
				var ref=firebase.database().ref().child("delegate");
				$scope.delegates=$firebaseArray(ref);
				//$scope.today=new Date(this.date);
				$scope.today=(new Date().getMonth()+1)+"-"+new Date().getDate()+"-"+new Date().getFullYear();
				
				///				
				$scope.$watch('familyname',function() 	{$scope.test();});
				$scope.$watch('givenname',function() 	{$scope.test();});
				$scope.$watch('email', function() 		{$scope.test();});
				$scope.$watch('school', function() 		{$scope.test();});
				$scope.$watch('gender', function() 		{$scope.test();});
				$scope.$watch('membership', function() 		{$scope.test();});
				$scope.$watch('accomodation', function() 		{$scope.test();});
				$scope.$watch('size', function() 		{$scope.test();});
				///
				$scope.test = function() {
					$scope.incomplete=false;
				  if(!$scope.familyname || !$scope.givenname || !$scope.email || !$scope.school || !$scope.membership || !$scope.gender || !$scope.accomodation || !$scope.size){
					$scope.incomplete = true;
				  }				 
				};
			
				$scope.add=function(){
					///			
					$scope.delegates.$add({
						'regdate':$scope.today,
						'familyname':$scope.familyname,
						'givenname':$scope.givenname,
						'email':$scope.email,
						'school':$scope.school,
						'gender':$scope.gender,
						'membership':$scope.membership,
						'accomodation':$scope.accomodation,
						'size':$scope.size,
					});
					swal({
						title:'New Delegate Added!',
						type:'success',
					})
					$scope.familyname="";
					$scope.givenname="";
					$scope.email="";
					$scope.school="";
					$scope.gender="";
					$scope.membership="";
					$scope.accomodation="";
					$scope.size="";
					document.getElementById('familyname').autofocus;
				}
			});
			///
			app.controller("listctrl",function($scope,Schools,$firebaseArray,$routeParams){
				$scope.schools=Schools.list();
				var ref=firebase.database().ref().child("delegate");
				$scope.delegates=$firebaseArray(ref);
				
				
				
				
				
				$scope.header=["","NAME","REG. DATE","EMAIL","SCHOOL","GENDER","MEMBERSHIP","ACCOMODATION","T-SHIRT","ACTION"];
				$scope.sizes=["small","medium","large","xlarge","xxlarge"];
				$scope.gender_type=["male","female"];
				$scope.membership_type=["active","non"];
				$scope.accomodation_type=["live-in","live-out"];
				$scope.delegate;
				$scope.currentPage = 0;
				$scope.pageSize = 10;
				$scope.data = [];
				$scope.q = '';
				
				///
				$scope.numberOfPages=function(){
					return Math.ceil($scope.delegates.length/$scope.pageSize);                
				}
				///
				for (var i=0; i<$scope.delegates.length; i++) {
					$scope.data.push("Item "+i);
				}
				///
				$scope.countdelegates=function(){
					return $scope.delegates.length;
				}
				///
				$scope.edit=function(d){
					document.getElementById('mymodal').style.display='block';
					$scope.regdate=d.regdate;
					$scope.familyname=d.familyname;
					$scope.givenname=d.givenname;
					$scope.email=d.email;
					$scope.school=d.school;	
					$scope.gender=d.gender;
					$scope.membership=d.membership;	
					$scope.accomodation=d.accomodation;	
					$scope.size=d.size;	
					$scope.delegate=d;
					ref.child($routeParams.id).on("value",function(snapshot){
						console.log(snapshot.val());
					});
					console.log($routeParams.id);
				}
				///
				$scope.save=function(){				
					$scope.delegates.$remove($scope.delegate);
					$scope.delegates.$add({
						'regdate':$scope.regdate,
						'familyname':$scope.familyname,
						'givenname':$scope.givenname,
						'email':$scope.email,
						'school':$scope.school,
						'gender':$scope.gender,
						'membership':$scope.membership,
						'accomodation':$scope.accomodation,
						'size':$scope.size
					});
					//alert("DELEGATE UPDATED !!!");
					swal({
						title:'Delegate Information Updated!',
						type:'success',
					})
					document.getElementById('mymodal').style.display='none';			
				}
				///
				$scope.remove=function(s){
				var ok=confirm("Do you really want to delete?");
				if(ok){
					$scope.delegates.$remove(s);
				}
				
			}
				
			});
			app.filter('sumByKey', function() {
				return function(data, key) {
					if (typeof(data) === 'undefined' || typeof(key) === 'undefined') {
						return 0;
					}
		 
					var sum = 0;
					for (var i = data.length - 1; i >= 0; i--) {
						sum += parseInt(data[i][key]);
					}
		 
					return sum;
				};
			});
			///
			app.filter('startFrom', function() {
				return function(input, start) {
					start = +start; //parse to int
				return input.slice(start);
				}
			});
})()


  