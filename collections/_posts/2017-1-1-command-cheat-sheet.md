---
title: Command Cheat Sheet for Metasploit's Meterpreter
author: 読み上げ
post_list: "date"
collection_list: true
toc: true
show_date: true
publish: true
home_btn: true
btn_text: true
footer: true
maximize: true
encrypted_text: true
toc_level: 4
category: Cheat Sheet
date: 2019-5-25
excerpt: "Metasploit's Meterpreter"
abstract: 
---

## Core Commands

### ? - help menu

  1. ***background*** - moves the current session to the background
  2. ***bgkill*** - kills a background meterpreter script
  3. ***bglist*** - provides a list of all running background scripts
  4. ***bgrun*** - runs a script as a background thread
  5. ***channel*** - displays active channels
  6. ***close*** - closes a channel
  7. ***exit*** - terminates a meterpreter session
  8. ***help*** - help menu
  9. ***interact*** - interacts with a channel
  10. ***irb*** - go into Ruby scripting mode
  11. ***migrate*** - moves the active process to a designated PID
  12. ***quit*** - terminates the meterpreter session
  14. ***read*** - reads the data from a channel
  15. ***run*** - executes the meterpreter script designated after it
  16. ***use*** - loads a meterpreter extension
  17. ***write*** - writes data to a channel

### File System Commands
  1. ***cat*** - read and output to stdout the contents of a file
  2. ***cd*** - change directory on the victim
  3. ***del*** - delete a file on the victim
  4. ***download*** - download a file from the victim system to the attacker system
  5. ***edit*** - edit a file with vim
  6. ***getlwd*** - print the local directory
  7. ***getwd*** - print working directory
  8. ***lcd*** - change local directory
  9. ***lpwd*** - print local directory
  10. ***ls*** - list files in current directory
  11. ***mkdir*** - make a directory on the victim system
  12. ***pwd*** - print working directory
  13. ***rm*** - delete a file
  14. ***rmdir*** - remove directory on the victim system
  15. ***upload*** - upload a file from the attacker system to the victim

### Networking Commands
 1. ***ipconfig*** - displays network interfaces with key information including IP address, etc.
 2. ***portfwd*** - forwards a port on the victim system to a remote service
 3. ***route*** - view or modify the victim routing table

### System Commands
  1. ***clearav*** - clears the event logs on the victim's computer
  2. ***drop_token*** - drops a stolen token
  3. ***execute*** - executes a command
  4. ***getpid*** - gets the current process ID (PID)
  5. ***getprivs*** - gets as many privileges as possible
  6. ***getuid*** - get the user that the server is running as
  7. ***kill*** - terminate the process designated by the PID
  8. ***ps*** - list running processes
  9. ***reboot*** - reboots the victim computer
  10. ***reg*** - interact with the victim's registry
  11. ***rev2self*** - calls RevertToSelf() on the victim machine
  12. ***shell*** - opens a command shell on the victim machine
  13. ***shutdown*** - shuts down the victim's computer
  14. ***steal_token*** - attempts to steal the token of a specified (PID) process
  15. ***sysinfo*** - gets the details about the victim computer such as OS and name

### User Interface Commands
  1. ***enumdesktops*** - lists all accessible desktops
  2. ***getdesktop*** - get the current meterpreter desktop
  3. ***idletime*** - checks to see how long since the victim system has been idle
  4. ***keyscan_dump*** - dumps the contents of the software keylogger
  5. ***keyscan_start*** - starts the software keylogger when associated with a process such as Word or browser
  6. ***keyscan_stop*** - stops the software keylogger
  7. ***screenshot*** - grabs a screenshot of the meterpreter desktop
  8. ***set_desktop*** - changes the meterpreter desktop
  9. ***uictl*** - enables control of some of the user interface components

### Privilege Escalation Commands
***getsystem*** - uses 15 built-in methods to gain sysadmin privileges

### Password Dump Commands
***hashdump*** - grabs the hashes in the password (SAM) file
**Note** that ~~~hashdump~~~ will often trip AV software, but there are now two scripts that are more stealthy, ***"run hashdump"*** and ***"run smart_hashdump"***. Look for more on those on my ***upcoming meterpreter script cheat sheet.

### Timestomp Commands
***timestomp*** - manipulates the modify, access, and create attributes of a file
