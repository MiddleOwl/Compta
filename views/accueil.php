<?php

	$title="Accueil";	
	$nav="";
	$dateDuJour=date('d M Y');
	echo("<p>Bonjour ".$userName." ! Nous sommes le ".$dateDuJour."</p>");
	
?>
<?phpob_start();?>

<p>--Récap du mois--</p>
<table>
	<thead>
		<tr>
			<th>Poste budgétaire</th>
			<th>Montant</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td></td>
			<td></td>
		</tr>
	</tbody>
</table>

<a href="index.php?page=operationsdumois&action=read&annee=&mois="><input type="button" value="Saisir une opération"/></a>

	
<?php$content=ob_get_clean();?>

<?phpinclude("/../templates/template.php");?>