#!/bin/bash

# Run the first script
node fetchExternalContent/fetchAnnotatedCopies/fetchExternalContentMetaData.js

# Run the second script
node fetchExternalContent/fetchAnnotatedCopies/fetchExternalContent.js

# Run the third script
node fetchExternalContent/fetchAnnotatedCopies/addHTMLstructureToExternalContent.js
