<?php
  $tab = [ 2 => 'test', 0 => 'nombre' ]; if (array_search(2, $tab) !== false)
    echo '<p> array_search : 2 est dans le tableau </p>';
    if(array_search('nombre', $tab) !== false)
    echo '<p> array_search : nombre est dans le tableau </p>';

    ?>