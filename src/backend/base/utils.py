from django.utils.crypto import get_random_string


def generate_invite():
    return get_random_string(8)
