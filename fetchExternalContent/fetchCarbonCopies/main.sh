#!/bin/bash

# Run the first script
node fetchExternalContent/fetchCarbonCopies/fetchExternalContentMetaData.js

# Run the second script
node fetchExternalContent/fetchCarbonCopies/fetchExternalContent.js

# Run the third script
node fetchExternalContent/fetchCarbonCopies/addHTMLstructureToExternalContent.js
