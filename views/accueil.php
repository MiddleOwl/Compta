<?php
	$title="Accueil";	
	$nav="";
	$dateDuJour=date('d M Y');
	echo("<p>Bonjour ".$userName." ! Nous sommes le ".$dateDuJour."</p>");
?>

<?php ob_start(); ?>
    <h3>--Récap du mois--</h3>

    <div id="recap_mois" class="d-flex justify-content-center col-lg-5">
        <table>
            <thead>
                <tr>
                    <th style="width: 200px;">Poste budgétaire</th>
                    <th style="width: 200px;">Montant</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Contenu 1</td>
                    <td>Contenu 2</td>
                </tr>
            </tbody>
        </table>
    </div>

    <a href="index.php?page=operationsdumois&action=read&annee=&mois="><input type="button" value="Saisir une opération"/></a>
<?php $content=ob_get_clean(); ?>

<?php include(__DIR__."/../templates/template.php"); ?>
