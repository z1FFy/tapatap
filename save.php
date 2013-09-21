<?php
$xml =$_POST['xml'];
        $filename = 'newxml.xml';
        $file = fopen ($filename, 'w');
        fwrite($file, $xml);
?>