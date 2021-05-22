<?php
/**
 * Функция склонения числительных в русском языке
 *
 * @param int    $number Число которое нужно просклонять
 * @param array  $titles Массив слов для склонения
 * @return string
 **/

function decl_of_num($number, $titles)
{
	$cases = array (2, 0, 1, 1, 1, 2);
	$format = $titles[ ($number%100 > 4 && $number %100 < 20) ? 2 : $cases[min($number%10, 5)] ];
	return sprintf($format, $number);
}
