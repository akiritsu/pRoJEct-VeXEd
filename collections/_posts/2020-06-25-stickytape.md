---
title: Combine multiple python files into one python file
toc_level: 6
category: Article
date: 2020-06-25
---

Thing you want to do
For example, a project where main.py calls another file ...

- main.py
- sub1.py
- folder
    - sub2.py
↓ ↓ ↓ The functions and classes that depend on it ...

onefile.py

## Solution
Here, you can use a python package called [stickytape](https://pypi.org/project/stickytape/) .

> stickytape = Adhesive tape

## Experiment
All the experimented code is published on Github, so for reference. 

install Now you can use the stickytape command. (No command name ...)

~~~
$ pip install stickytape
~~~

## Prepare the file
The configuration is as follows.

- main.py
- sub1.py
- folder
    - sub2.py
folder/sub2.py Make an Apple class as you like and give it a value property as you like.

~~~python
class Apple:

    def __init__(self, value):
        self.value = value
~~~

sub1.py Make an average function as appropriate.

sub1.py

~~~python
def mean(a, b):
    return (a+b)/2
main.py Import it, calculate it appropriately, and display it appropriately.

from sub1 import mean
from folder.sub2 import Apple

apple1 = Apple(value=100)
apple2 = Apple(value=200)

result = mean(apple1.value, apple2.value)
print(result)
~~~

Now! In one file!
Execute the following command. (Of course, anything in onefile.py is OK)

~~~
$ stickytape main.py > onefile.py
~~~

result
The following ʻonefile.py` will be generated.
~~~python
#!/usr/bin/env python

import contextlib as __stickytape_contextlib

@__stickytape_contextlib.contextmanager
def __stickytape_temporary_dir():
    import tempfile
    import shutil
    dir_path = tempfile.mkdtemp()
    try:
        yield dir_path
    finally:
        shutil.rmtree(dir_path)

with __stickytape_temporary_dir() as __stickytape_working_dir:
    def __stickytape_write_module(path, contents):
        import os, os.path

        def make_package(path):
            parts = path.split("/")
            partial_path = __stickytape_working_dir
            for part in parts:
                partial_path = os.path.join(partial_path, part)
                if not os.path.exists(partial_path):
                    os.mkdir(partial_path)
                    open(os.path.join(partial_path, "__init__.py"), "w").write("\n")

        make_package(os.path.dirname(path))

        full_path = os.path.join(__stickytape_working_dir, path)
        with open(full_path, "w") as module_file:
            module_file.write(contents)

    import sys as __stickytape_sys
    __stickytape_sys.path.insert(0, __stickytape_working_dir)

    __stickytape_write_module('sub1.py', 'def mean(a, b):\n    return (a+b)/2')
    __stickytape_write_module('folder/sub2.py', 'class Apple:\n\n    def __init__(self, value):\n        self.value = value')
    from sub1 import mean
    from folder.sub2 import Apple
    
    apple1 = Apple(value=100)
    apple2 = Apple(value=200)
    
    result = mean(apple1.value, apple2.value)
    print(result)
~~~

The correct calculation result is displayed safely.

Experiment with Google Colab
I copied the above code to Google Colab and ran it.

As shown below, 150.0 was displayed safely.

[スクリーンショット](https://linuxtut.com/en/dfc67048c7f214a31265/)

![alt text](https://github.com/anonymansz/stickytape/raw/main/7f75a9f3cecc.png)

2020-06-25 

## Scripting
It's a digression from here.
The command stickytape is long, and I'm lazy to specify the directory of the generated file one by one, so I think it's a good idea to script it as follows.

- main.py
- sub1.py
- folder
    - sub2.py
- scripts
    - tape.sh
- build
    - onefile.py
tape.sh

~~~bash
#initial value
entry="main.py"
output="onefile.py"

#option
while getopts e:o: OPT
do
	case $OPT in 
		"e" ) entry=${OPTARG};;
		"o" ) output=${OPTARG};;
	esac
done

#Run
stickytape ${entry} > "build/${output}"
~~~

The following command will run main.py and generate onefile.py in the build directory.

~~~
$ mkdir build
$ sh scripts/tape.sh
~~~

also prepared options.

| Option name | Description |
| :------------ | :----- |
| -e |Entry point filename |
| -o |File name to output |
~~~
$ sh scripts/tape.sh -e <file name> -o <file name>
~~~
The generated directory is fixed with build, so if you don't like it, change it.

## Full Tutorials
If you write it at the beginning, it will get in the way, so let me introduce yourself quietly at the end.

| Name        | School | Follow on Twitter! |
| :---------- | :----- | :----------------- |
| Aki Wataoka | Kobe University | [@Wataoka_Koki](https://twitter.com/Wataoka_Koki) |
