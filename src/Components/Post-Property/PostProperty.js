import React from "react";

import "./style.css"

const PostProperty = () => {
    return (
        <div>
            <form>
                <label>
                 PropertyName:<input type="text" name="PropertyName" />
                     </label>
                     <label>
                 PropertyType:<input type="text" name="PropertyType" />
                     </label>    
                <select>
                <option value="PG's">PG's </option>
                <option value="Houses">Houses</option>
                </select>
                <label>
                 PropertyLocation:<input type="text" name="PropertyLocation" />
                     </label>
                <select>
                <option value="Mehidipatnam">Mehidipatnam</option>
                <option value="LBnagar">LBnagar</option>
                <option value="Gachibowli">Gachibowli</option>
                <option value="Koti">Koti</option>
                <option value="Kukatpally">Kukatpally</option>
                <option value="Uppal">Uppal</option>
                <option  value="Ibrahmipatnam">Ibrahmipatnam</option>
                <option value="Abids">Abids</option>
                <option value="Secunderbad">Secunderbad</option>
                </select>
                <label>
                 LocationType:<input type="text" name="LocationType" />
                     </label>
                <select>
                <option value="Mehidipatnam">Mehidipatnam</option>
                <option value="LBnagar">LBnagar</option>
                <option value="Gachibowli">Gachibowli</option>
                <option value="Koti">Koti</option>
                <option value="Kukatpally">Kukatpally</option>
                <option value="Uppal">Uppal</option>
                <option value="Ibrahmipatnam">Ibrahmipatnam</option>
                <option value="Abids">Abids</option>
                <option value="Secunderbad">Secunderbad</option>
                </select>
                <label>
                 MobileNumber:<input type="text" name="MobileNumber" />
                     </label>
                     <label>
                 PriceRange:<input type="text" name="PriceRange" />
                     </label>
                     <select>
                     <option value="Below 1 lakh">Below 1 Lakh</option>
                     <option value="5-15 Lakhs">5-15 Lakhs</option>
                     <option value="15-30 Lakhs">15-30 Lakhs</option>
                     <option value="30-60 Lakhs">30-60 Lakhs</option>
                </select>
                <label>
                 UploadImages:<input type="text" name="UploadImages" />
                     </label>
                  <label>   
                 <input type="file" name="UploadImages"placeholder="ChoosenFile" />
                    </label>
                 <label>
                 Description:<input type="text" name="Description" />
                     </label>
            </form>
        <button type = 'submit'>submit</button>
        </div>
    );
};

export default PostProperty;
