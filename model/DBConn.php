<?php
	///database abstraction
	class DBConn{
		///
		public $hostname='localhost';
		public $username='root';
		public $password='';
		public $database='bhoa';
		public $conn;
		///
		public function DBConn(){
			try{
				$this->conn=new PDO("mysql:host=$this->hostname;dbname=$this->database",$this->username,$this->password);
			}catch(PDOException $e){ echo $e->getMessage();}
		}
		///
		public function insert($table,$fields,$data){
			$flds=implode(',',$fields);
			$q=array();
			foreach($data as $d) $q[]='?';
			$qmark=implode(',',$q);
			$sql="INSERT INTO $table($flds) VALUE($qmark)";
			$stmt=$this->conn->prepare($sql);
			$ok=$stmt->execute($data);
			return $ok;
		}
		///
		public function getAll($table){
			$sql="SELECT * FROM $table";
			$stmt=$this->conn->prepare($sql);
			$stmt->execute();
			$rows=$stmt->fetchAll(PDO::FETCH_ASSOC);
			return $rows;
		}
		///
		public function getAllActive($table){
			$sql="SELECT * FROM $table where active=1";
			$stmt=$this->conn->prepare($sql);
			$stmt->execute();
			$rows=$stmt->fetchAll(PDO::FETCH_ASSOC);
			return $rows;
		}
		///
		public function deleteRow($table,$id){
			$sql="DELETE FROM $table WHERE id=?";
			$stmt=$this->conn->prepare($sql);
			$ok=$stmt->execute(array($id));
			return $ok;
		}
		///
		public function deactivate($table,$id){
			
			return $this->updateRow($table,array("active"),0,$id);
		}
		
		///
		public function updateRow($table,$fields,$data,$id){
			$flds=implode("=?,",$fields)."=?";
			$sql="UPDATE `$table` SET $flds WHERE id=$id";
			$stmt=$this->conn->prepare($sql);
			$ok=$stmt->execute(array($data));
			
			return $ok;
		}
		
	}//end of class
?>