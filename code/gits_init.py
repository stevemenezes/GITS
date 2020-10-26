#!/usr/bin/python3
import gits_logging
from subprocess import Popen, PIPE


def gits_init_func(args):
    """
    Function that creates an empty Git repository or re-initializes an existing one
    """
    try:
        subprocess_command = list()
        if args.url:
            subprocess_command.append("git")
            subprocess_command.append("clone")
            subprocess_command.append(args.url)
        else:
            subprocess_command.append("git")
            subprocess_command.append("init")
            if args.bare is True:
                subprocess_command.append("--bare")
        # print(subprocess_command)
        process = Popen(subprocess_command, stdout=PIPE, stderr=PIPE)
        stdout, stderr = process.communicate()
        stdout = stdout.decode("utf-8")
        print(stdout)

    except Exception as e:
        print("ERROR: gits init command caught an exception")
        print("ERROR: {}".format(str(e)))