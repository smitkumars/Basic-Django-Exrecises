from selenium import webdriver
import selenium

#PATH = "C:\Users\STEM\Desktop\Cognitive_ai\Django_python\Atom_projects\chromedriver.exe"

driver = webdriver.Chrome()

driver.get("https://www.google.com")


# get element
element = driver.find_element_by_id("input")

# send keys
element.send_keys("smitkumar suryawanshi")

print('Run....')
