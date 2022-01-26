The motiviation
===============

Repository systems (systems that collect metadata and digital objects) often start out with complex web forms. Over time these forms tend to acrue more complexity. This wouldn't be bad my itself but these forms are usually implemented using some sort of non-standard template system. This causes an entanglement between the data models and UI that becomes increasingly unsustainable as complexity increases. 

This is an exploration of making building those repository data entry screens easier by adopting a small set of web components in capsulating the common functionality so that when one element gets an auto-complete or a lookup function added to it then that functionality can be made available to other systems who have the same type of component. E.g. ORCID is a unique identifier often added to a "person" object. It'd be nice to have ORCID displayed in a standard way (e.g. linked to the ORCID website) and edited in a standard way (e.g. have a lookup to make sure you typed the orcid in correctly or can look it up by person's name). That becomes possible if the ORCID display element and edit elements are standardize via common web components.  If I add a look up or autocomplete for one then it works for any system using the same component.



