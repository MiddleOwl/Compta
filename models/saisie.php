<?php
	
	function create_operation($date,$nature,$type,$idPosteBudgetaire,$intitule,$montant,$comptabilise){
		include(dirname(__FILE__)."/../hidden/connexion.php");
		$query = $bdd -> exec('INSERT INTO operations (date,nature,type,posteBudgetaire,intitule,montant,comptabilise) VALUES ("'.$date.'","'.$nature.'","'.$type.'","'.$idPosteBudgetaire.'","'.$intitule.'",'.$montant.','.$comptabilise.')');
	}
	
	function get_operations_du_mois($annee,$mois){
		include(dirname(__FILE__)."/../hidden/connexion.php");
		$operationsDuMois=array();
		
		$query=$bdd -> query("SELECT * FROM operations WHERE date BETWEEN'".$annee."-".$mois."-01' AND '".$annee."-".$mois."-31' ORDER BY date ASC");
		while($data=$query->fetch()){
			$operationsDuMois[]=$data;
		}
		$query->closeCursor();
		return($operationsDuMois);
	}
	
	function get_all_operations($annee,$mois){
		include(dirname(__FILE__)."/../hidden/connexion.php");
		$allOperations=array();
		$query=$bdd -> query("SELECT * FROM operations WHERE date <='".$annee."-".$mois."-31'");
		while($data=$query->fetch()){
			$allOperations[]=$data;
		}
		$query->closeCursor();
		return($allOperations);
	}
	
	function get_poste_budgetaire(){
		include(dirname(__FILE__)."/../hidden/connexion.php");
		$posteBudgetaire=array();
		$query = $bdd -> query ('SELECT id,nom FROM poste_budgetaire');
		while($data=$query->fetch()){
			$posteBudgetaire[]=$data;
		}
		$query->closeCursor();
		return($posteBudgetaire);
	}
	
	function get_id_poste_budgetaire_from_nom_poste_budgetaire($posteBudgetaire){
		include(dirname(__FILE__)."/../hidden/connexion.php");
		$query=$bdd->query('SELECT id FROM poste_budgetaire WHERE nom="'.$posteBudgetaire.'"');
		$idPosteBudgetaire=$query->fetch();
		$query->closeCursor();
		return($idPosteBudgetaire);
	}
	function get_nom_poste_budgetaire_from_id_poste_budgetaire($idPoste){
		include(dirname(__FILE__)."/../hidden/connexion.php");
		$query=$bdd->query('SELECT nom FROM poste_budgetaire WHERE id='.$idPoste);
		$nomPosteBudgetaire=$query->fetch();
		$query->closeCursor();
		return($nomPosteBudgetaire);
	}
	
	function get_operation_from_id($id){
		include(dirname(__FILE__)."/../hidden/connexion.php");
		$query=$bdd->query('SELECT date,nature,type,posteBudgetaire,intitule,montant FROM operations WHERE id="'.$id.'"');
		$operation=$query->fetch();
		$query->closeCursor();
		return ($operation);
	}
	
	function update_operation($id,$date,$nature,$type,$idPosteBudgetaire,$intitule,$montant,$comptabilise){
		include(dirname(__FILE__)."/../hidden/connexion.php");
		$query=$bdd->exec('UPDATE operations SET
			date="'.$date.'",
			nature="'.$nature.'",
			type="'.$type.'",
			posteBudgetaire="'.$idPosteBudgetaire.'",
			intitule="'.$intitule.'",
			montant="'.$montant.'",
			comptabilise="'.$comptabilise.'"
			WHERE id='.$id);
	}
	
	function comptabiliser_operation($id,$comptabilise){
		include(dirname(__FILE__)."/../hidden/connexion.php");
		$query=$bdd->exec('UPDATE operations SET
			comptabilise="'.$comptabilise.'"
			WHERE id='.$id);
	}
	
	function delete_operation($id){
		include(dirname(__FILE__)."/../hidden/connexion.php");
		$query=$bdd->exec("delete from operations WHERE id=".$id);
	}
	
	
?>

