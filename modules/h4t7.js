function validateObject(obj, schema) {
  // Iterate over each property in the schema
  for (let key in schema) {
    // If the property is required but missing in the object, return false
    if (schema[key].required && !(key in obj)) {
      return false;
    }

    // If the property is not required and missing, continue to the next property
    if (!schema[key].required && !(key in obj)) {
      continue;
    }

    // If the property type does not match the specified type, return false
    if (schema[key].type && typeof obj[key] !== schema[key].type) {
      return false;
    }

    // If additional validation rules are provided, apply them
    if (schema[key].validator && !schema[key].validator(obj[key])) {
      return false;
    }
  }

  // If all checks pass, return true
  return true;
}

module.exports = {
  validateObject,
};
