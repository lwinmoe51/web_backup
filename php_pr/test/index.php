<?php
function add($nums){
    if(!is_array($nums)){
        throw new Exception("Argument must be array");
    }
    return array_sum($nums);
}
try{
    echo add(1);
} catch (Exception $e){
    echo $e->getMessage();
    echo "lwinmoe";
}
