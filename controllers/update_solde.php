<?php
include(dirname(__FILE__)."/../models/saisie.php");
function calculMontant(){
			$dateDuJour=date('Y-m-d');
			$annee=explode('-',$dateDuJour)[0];
			$mois=explode('-',$dateDuJour)[1];
			$operationsDuMois=get_operations_du_mois($annee,$mois);
			$montantCumule=0;
			foreach ($operationsDuMois as $oM){
			
				
				$montantCumule+=(+$oM['montant']);
				
			}
			return($montantCumule);
		}
		
		$montantTotal=calculMontant();
		echo($montantTotal);
		
?>