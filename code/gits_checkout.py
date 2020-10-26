from subprocess import Popen, PIPE


def checkout(args):
    """
    Function that creates a new local branch
    from local master after updating local master
    from remote master. The idea here is that the new branch should have all the latest commits.
    """
    try:
        # checkout to given branch
        checkout_feature = list()
        checkout_feature.append("git")
        checkout_feature.append("checkout")
        branch_name = args.branch_name
        if len(branch_name) == 0:
            # do nothing
            pass
        else:
            subprocess_command.append(branch_name)
        process3 = Popen(checkout_feature, stdout=PIPE, stderr=PIPE)
        stdout, stderr = process3.communicate()

    except Exception as e:
        print("ERROR: gits checkout command caught an exception")
        print("ERROR: {}".format(str(e)))
        return False

    return True