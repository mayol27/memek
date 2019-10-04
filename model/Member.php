<?php
	////
	include('DBConn.php');
	class Member{
		////
		private $conn;
		private $table='member';
		private $fields=array('id','lastname','firstname','rep_of','image');
		private $fields_no_id=array('lastname','firstname','rep_of');
		////
		public function Member(){
			$this->conn=new DBConn();
		}
		////
		public function getAllMember(){
			return $this->conn->getAll($this->table);
		}
		///
		////
		public function getAllActiveMember(){
			return $this->conn->getAllActive($this->table);
		}
		////
		public function addMember($data){
			return $this->conn->insert($this->table,$fields_no_id,$data);
		}
		///
		public function updateMember($data,$id){
			return $this->conn->updateRow($this->table,$fields_no_id,$data,$id);
		}
		///
		public function deleteMember($id){
			return $this->conn->deleteRow($this->table,$id);
		}
		///
		public function deactivate($id){
			return $this->conn->deactivate($this->table,$id);
		}
		////
	}//end of class
?>
