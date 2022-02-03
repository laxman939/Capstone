import React from "react";

import "./style.css"

const PostProperty = () => {
    return (
        <div>
            <form>
            <label>
                 PropertyName<input type="text" name="PropertyName" />
                     </label>
                     <label>
                 PropertyType<input type="text" name="PropertyType" />
                     </label> 
                     <select>
                <option value="PG's">PG's</option>
                <option value="HOUSES">Houses</option>
                </select>
                     <label>
                 PG'S Preferred<input type="text" name="PG'S Preferred" />
                     </label>
                  <select>
                <option value="Students">Students</option>
                <option value="Professionals">Professionals</option>
                </select>
                <label>
                 RoomType<input type="text" name="RoomType" />
                     </label>
                     <select>
                     <option value="SingleShare">SingleShare</option>
                     <option value="TwoShare">TwoShare</option>
                     <option value="ThreeShare">ThreeShare</option>
                     <option value="FourShare">FourShare</option>
                     <option value="FiveShare">FiveShare</option>
                     <option value="SixShare">SixShare</option>
                     </select><br/>
                     <label/>
                     Houses Preferred<input type="text" name= "Houses Preferred" /><br/>
                     <label/>
                     <select>
                     <option value="Family">Family</option>
                     <option value="Bachelor's">Bachelor's</option>
                     </select><br/>
                     <label>
                 HouseType<input type="Text" name= "Housetype" /><br/>
                     </label>
                     <select>
                     <option value="1st Floor">1st Floor</option>
                     <option value="2nd Floor">2nd Floor</option>
                     <option value="3rd Floor">3rd Floor</option>
                     <option value="Flat">Flat</option>
                     <option value="Independent">Independent</option>
                     </select><br/>
                     <label>
                 PropertyLocation<input type="text" name="PropertyLocation" />
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
                 Locality<input type="text" name="Locality" />
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
                     <option value="Below 10 Thousand">Below 1o Thousand</option>
                     <option value="1o-20 Thousand">10-20 Thousand</option>
                     <option value="20-30 Thousand">20-30 Thousand</option>
                     <option value="30-40 Thousand">30-40 Thousand</option>
                     </select>
                
                <label>
                 UploadImages<input type="text" name="UploadImages" />
                     </label>
                  <label>   
                 <input type="file" name="UploadImages"placeholder="ChoosenFile" />
                    </label>
                 <label>
                 Description<input type="text" name="Description" />
                     </label>
                     
            </form>
        <button type = 'submit'>submit</button>
        </div>
    );
};

export default PostProperty;
