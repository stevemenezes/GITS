#!/usr/bin/python3

from subprocess import Popen, PIPE

def gits_branch():
    """
    Function to list the branches
    """
    try:
        subprocess_command = list()
        subprocess_command.append("git")
        subprocess_command.append("branch")
        subprocess_command.append("-a")
        process = Popen(subprocess_command, stdout=PIPE, stderr=PIPE)
        stdout, stderr = process.communicate()
    except Exception as e:
        print("ERROR: gits branch command caught an exception")
        print("ERROR: {}".format(str(e))
        return False
    
    return True

