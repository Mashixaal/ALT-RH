<table>
    <?php for($cpt = 1 ; $cpt <= 10 ; $cpt++) { ?>

        <tr>
            <td>7</td>
            <td> x </td>
            <td><?php echo $cpt ?></td>
            <td> = </td>
            <td><?php echo $cpt * 7 ?></td>
        </tr>

<?php } ?>
</table>

<ul>
<?php for($cpt = 1 ; $cpt <= 10 ; $cpt++) { ?>

    <li>7 x <?php echo $cpt ?> = <?php echo $cpt * 7 ?></li>

    <?php } ?>
    
</ul>