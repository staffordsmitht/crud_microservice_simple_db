#ensure the aws cli is installed, otherwise exit
which aws 1>/dev/null
if [ $? -eq 0 ]; 
then 
    echo "Found your aws cli." 
else 
    echo "You don't have aws cli. Please install it and run again." 
    exit
fi

#learned how to redirect standard output(1) to /dev/null (a way of saying to discard it)
#which is a linux-based command
#$? holds the return value of the previous command (0=success, anything else=failure)
#fi is the opposite of if (how you close the if statement)

#are you logged in on aws? HW
#what region aws

#create db, script, table
