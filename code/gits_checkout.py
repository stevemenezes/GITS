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
            checkout_feature.append(branch_name)
        process = Popen(checkout_feature, stdout=PIPE, stderr=PIPE)
        stdout, stderr = process.communicate()
        print(stdout.decode('utf-8'))
        
        if stderr.decode('utf-8') == "error: pathspec '"+ branch_name +"' did not match any file(s) known to git\n":
            print(stderr.decode('utf-8'))
            print(branch_name + " did not match any branches")
            print("Please give a valid branch name or create a branch using gits create_branch")      
        else:
            print(stderr.decode('utf-8'))
    except Exception as e:
        print("ERROR: gits checkout command caught an exception")
        print("ERROR: {}".format(str(e)))
        return False

    return True