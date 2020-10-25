#!/usr/bin/python3
import gits_logging
from subprocess import Popen, PIPE


def gits_init_func(args):
    """
    Function that initializes a local git repository
    """
    try:
        subprocess_command = list()
        subprocess_command.append("git")
        subprocess_command.append("init")
        # print(subprocess_command)
        process = Popen(subprocess_command, stdout=PIPE, stderr=PIPE)
        stdout, stderr = process.communicate()
        print(stdout)
        print(stdout == b'')
        stdout = stdout.decode("utf-8")
        print(stdout)

    except Exception as e:
        print("ERROR: gits init command caught an exception")
        print("ERROR: {}".format(str(e)))