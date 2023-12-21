from dictionaries import cause_organization_about_dict, organization_image_dict
from faker import Faker
import bcrypt

def create_dictionary(cause_organization_about_dict, organization_image_dict):
    organizations_complete_dict = {}
    fake = Faker()

    for cause, org_list in cause_organization_about_dict.items():
        for org_info in org_list:
            name = org_info['name']
            if name in organization_image_dict:
                image_url = organization_image_dict[name]['imageurl']
                about = org_info['about']
                username = name.lower().replace(' ', '')
                # Generate a fake password
                fake_password = fake.password()
                # Hash the fake password using bcrypt
                hashed_password = bcrypt.hashpw(fake_password.encode('utf-8'), bcrypt.gensalt())
                organizations_complete_dict[name] = {'cause': cause, 'imageurl': image_url, 'about': about, 'username' : username, 'password': hashed_password}
    return (organizations_complete_dict)
    
# Call the function and store its return value
complete_dict = create_dictionary(cause_organization_about_dict, organization_image_dict)

# Print the returned dictionary
print(complete_dict)