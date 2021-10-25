from django.core.exceptions import ValidationError
from datetime import datetime


def validate_iso_timestamp(data):
    if isinstance(data, datetime):
        return

    try:
        dt_obj = datetime.fromtimestamp(data)
    except ValueError:
        raise ValidationError("%(value)s is an invalid iso string", params={"value": data})

    if dt_obj.tzinfo is None:
        raise ValidationError("%(value)s does not have a timezone specified", params={"value": data})
