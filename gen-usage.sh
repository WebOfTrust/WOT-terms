#!/bin/bash
##
# @Description: Steps to pass multiple parameters in shell script
# Take single argument
##

function show_usage (){
    printf "Usage: $0 [options [parameters]]\n"
    printf "\n"
    printf "Options:\n"
    printf " -n|--name, Menu name is used in menu\n"
    printf " -c|--column, Choose category column\n"
    printf " -l|--level, Choose level of understanding (1=expert digital ID, 3=expert SSI, 7=expert Autonomic IDs)\n"
    printf " -h|--help, Print help\n"

return 0
}

if [[ "$1" == "--help" ]] || [[ "$1" == "-h" ]];then
    show_usage
else
    echo "Incorrect input provided"
    show_usage
fi