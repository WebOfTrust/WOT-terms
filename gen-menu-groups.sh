#!/bin/bash
##
# @Description: Groups menu-items based on number
# Takes arguments
## DRAFT DRAFT DRAFT DRAFT DRAFT DRAFT DRAFT DRAFT DRAFT DRAFT !!!!

function group_items (){
  
return 0
}

if [[ "$1" == "--help" ]] || [[ "$1" == "-h" ]];then
    printf "Usage: $0 [options [parameters]]\n"
    printf "\n"
    printf "Options:\n"
    printf " -n|--name, Menu name is used in menu\n"
    printf " -c|--column, Choose category column\n"
    printf " -l|--level, Choose level of understanding (1=expert digital ID, 3=expert SSI, 7=expert Autonomic IDs)\n"
    printf " -h|--help, Print help\n"
    return 0
else
    echo "Incorrect input provided"
    group_items
fi