def reverse_string(string):
    return string[::-1]

var = reverse_string('world')
print(var)

# The slice statement '[::-1]' starts in the end and end in 0. Move in the step -1
# negative one, which means one step backwards