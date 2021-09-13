from os import listdir, rename
from datetime import datetime

location = input ("Provide path to the directory in which files you want rename:\n")
file_list = listdir(location)

print ("Files in this directory are:")
for i in file_list:
    print(str(i))

agreement = input ("Do you want to change the names of those files to format YYYY_MM_DD_000? Write yes or no\n")


if agreement == "yes":
    now = datetime.now()
    timestamp = now.strftime("%Y_%m_%d")
    print("Current date is " + timestamp)
    for index, file in enumerate(file_list):
        print(index, file)
        padded_index = str(index).zfill(3)
        rename("./"+location+"/"+file, "./"+location+"/"+timestamp+ "_" + padded_index +".jpg")
