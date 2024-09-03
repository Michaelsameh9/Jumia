import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/menutoggle.css";
import {Nav} from 'react-bootstrap';
import { MdOutlineMenu } from "react-icons/md";
import { CiApple } from "react-icons/ci";
import { GiPoloShirt } from "react-icons/gi";
import { LuBaby } from "react-icons/lu";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { PiTelevision } from "react-icons/pi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { CgGym } from "react-icons/cg";
import { CgGames } from "react-icons/cg";
import { BsPlusCircle } from "react-icons/bs";
import { Data,Data2,Data3,Data4,Data5,Data6,Data7,Data8,Data9,Data10,Data11 } from './menu';


export default function Menutoggle() {
  return (
   <>
   <div className='menu'>
                  <MdOutlineMenu className='icon-menu' />
                  <div className='toggle-menu'>
                    <Nav.Link href="/Supermarket"><CiApple className='icon-menu' />
                      <div className='toggle-menu2'>
                        <div className='links'>
                          <ul>
                            <li className='br-btn'><a href='/' className='hyper-link'>HOUSEHOLD SUPPLIES</a></li>
                            <ul className='list-link'>
                              <li ><a href='/' className='link-toggle'>Food Storage, Foil & Cling Film</a></li>
                              <li ><a href='/' className='link-toggle'>Disposable Plates & Cutlery</a></li>
                              <li ><a href='/' className='link-toggle'>Disposable Cups</a></li>
                              <li ><a href='/' className='link-toggle'>Trash, Compost & Lawn Bags</a></li>
                              <li ><a href='/' className='link-toggle'>Kitchen and Toilet Rolls</a></li>
                              <li ><a href='/' className='link-toggle'>Facial Tissues</a></li>
                              <li ><a href='/' className='link-toggle'>Household Batteries</a></li>
                              <li ><a href='/' className='link-toggle'>Lighters & Matches</a></li>
                            </ul>
                          </ul>
                          <ul>
                            <li className='br-btn'><a href='/' className='hyper-link'>HOUSEHOLD CLEANING</a></li>
                            <ul className='list-link'>
                              <li ><a href='/' className='link-toggle'>Dishwashing</a></li>
                              <li ><a href='/' className='link-toggle'>Air Fresheners</a></li>
                              <li ><a href='/' className='link-toggle'>Kitchen Cleaners</a></li>
                              <li ><a href='/' className='link-toggle'>Bathroom Cleaners</a></li>
                              <li ><a href='/' className='link-toggle'>All Purpose & Floor Cleaners</a></li>
                              <li ><a href='/' className='link-toggle'>Glass Cleaners</a></li>
                              <li ><a href='/' className='link-toggle'>Household Batteries</a></li>
                              <li ><a href='/' className='link-toggle'>Disinfectants</a></li>
                              <li ><a href='/' className='link-toggle'>Cleaning Tools</a></li>
                              <li ><a href='/' className='link-toggle'>Wood Polish & Care</a></li>
                            </ul>
                          </ul>
                          <ul>
                            <li className='br-btn'><a href='/' className='hyper-link'>BEVERAHES</a></li>
                            <ul className='list-link'>
                              <li ><a href='/' className='link-toggle'>Soft Drinks, Juices & Water</a></li>
                              <li ><a href='/' className='link-toggle'>Coffee, Tea & Cocoa</a></li>
                            </ul>
                          </ul>
                          <ul style={{ marginTop: "-46px" }}>
                            <li className='br-btn'><a href='/' className='hyper-link'>LAUNDRY</a></li>
                            <ul className='list-link'>
                              <li ><a href='/' className='link-toggle'>Detergent</a></li>
                              <li ><a href='/' className='link-toggle'>Fabric Softener</a></li>
                              <li ><a href='/' className='link-toggle'>Stain Removal</a></li>
                              <li ><a href='/' className='link-toggle'>Bleach</a></li>
                              <li ><a href='/' className='link-toggle'>Lint Removal</a></li>
                            </ul>
                          </ul>
                          <ul style={{ marginTop: "-22%" }}>
                            <li className='br-btn'><a href='/' className='hyper-link'>PET SUPPLINES</a></li>
                            <ul className='list-link'>
                              <li ><a href='/' className='link-toggle'>Dogs Suppliesr</a></li>
                              <li ><a href='/' className='link-toggle'>Cats Supplies</a></li>
                            </ul>
                          </ul>
                        </div>
                      </div>
                      Supermarket</Nav.Link>
                    <Nav.Link href="/Fashion"><GiPoloShirt className='icon-menu' />
                      <div className="toggle-menu3">
                        {Data.map((item) =>
                          <div className={item.class} key={item.id}>
                            <ul>
                              <li className='br-btn'><a href='/' className='hyper-link'>{item.hyper}</a></li>
                              <ul className='list-link'>
                                <li ><a href='/' className='link-toggle'>{item.link1}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link2}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link3}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link4}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link5}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link6}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link7}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link8}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link9}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link10}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link11}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link12}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link13}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link14}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link15}</a></li>
                              </ul>
                            </ul>
                          </div>
                        )}
                      </div>
                      Fashion</Nav.Link>
                    <Nav.Link href="/Health_Beauty"><MdOutlineHealthAndSafety className='icon-menu' />
                      <div className="toggle-menu4">
                        {Data2.map((item) =>
                          <div className={item.class} key={item.id}>
                            <ul>
                              <li className='br-btn'><a href='/' className='hyper-link'>{item.hyper}</a></li>
                              <ul className='list-link'>
                                <li ><a href='/' className='link-toggle'>{item.link1}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link2}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link3}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link4}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link5}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link6}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link7}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link8}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link9}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link10}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link11}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link12}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link13}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link14}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link15}</a></li>
                              </ul>
                            </ul>
                          </div>
                        )}
                      </div>
                      Health & Beauty</Nav.Link>
                    <Nav.Link href="/Baby_Products"><LuBaby className='icon-menu' />
                      <div className="toggle-menu5">
                        {Data3.map((item) =>
                          <div className={item.class} key={item.id}>
                            <ul>
                              <li className='br-btn'><a href='/' className='hyper-link'>{item.hyper}</a></li>
                              <ul className='list-link'>
                                <li ><a href='/' className='link-toggle'>{item.link1}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link2}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link3}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link4}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link5}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link6}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link7}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link8}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link9}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link10}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link11}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link12}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link13}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link14}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link15}</a></li>
                              </ul>
                            </ul>
                          </div>
                        )}
                      </div>
                      Baby Products</Nav.Link>
                    <Nav.Link href="/Phones_Tablets"><IoPhonePortraitOutline className='icon-menu' />
                      <div className="toggle-menu6">
                        {Data4.map((item) =>
                          <div className={item.class} key={item.id}>
                            <ul>
                              <li className='br-btn'><a href='/' className='hyper-link'>{item.hyper}</a></li>
                              <ul className='list-link'>
                                <li ><a href='/' className='link-toggle'>{item.link1}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link2}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link3}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link4}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link5}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link6}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link7}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link8}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link9}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link10}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link11}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link12}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link13}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link14}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link15}</a></li>
                              </ul>
                            </ul>
                          </div>
                        )}
                      </div>
                      Phones & Tablets</Nav.Link>
                    <Nav.Link href="/Home_Furniture"><IoHomeOutline className='icon-menu' />
                      <div className="toggle-menu7">
                        {Data5.map((item) =>
                          <div className={item.class} key={item.id}>
                            <ul>
                              <li className='br-btn'><a href='/' className='hyper-link'>{item.hyper}</a></li>
                              <ul className='list-link'>
                                <li ><a href='/' className='link-toggle'>{item.link1}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link2}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link3}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link4}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link5}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link6}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link7}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link8}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link9}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link10}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link11}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link12}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link13}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link14}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link15}</a></li>
                              </ul>
                            </ul>
                          </div>
                        )}
                      </div>
                      Home & Furniture</Nav.Link>
                    <Nav.Link href="/Appliances"><CgSmartHomeWashMachine className='icon-menu' />
                      <div className="toggle-menu8">
                        {Data6.map((item) =>
                          <div className={item.class} key={item.id}>
                            <ul>
                              <li className='br-btn'><a href='/' className='hyper-link'>{item.hyper}</a></li>
                              <ul className='list-link'>
                                <li ><a href='/' className='link-toggle'>{item.link1}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link2}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link3}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link4}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link5}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link6}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link7}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link8}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link9}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link10}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link11}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link12}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link13}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link14}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link15}</a></li>
                              </ul>
                            </ul>
                          </div>
                        )}
                      </div>
                      Appliances</Nav.Link>
                    <Nav.Link href="/Televisions_Audio"><PiTelevision className='icon-menu' />
                      <div className="toggle-menu9">
                        {Data7.map((item) =>
                          <div className={item.class} key={item.id}>
                            <ul>
                              <li className='br-btn'><a href='/' className='hyper-link'>{item.hyper}</a></li>
                              <ul className='list-link'>
                                <li ><a href='/' className='link-toggle'>{item.link1}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link2}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link3}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link4}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link5}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link6}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link7}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link8}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link9}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link10}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link11}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link12}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link13}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link14}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link15}</a></li>
                              </ul>
                            </ul>
                          </div>
                        )}
                      </div>
                      Televisions & Audio</Nav.Link>
                    <Nav.Link href="/Computing"><HiOutlineComputerDesktop className='icon-menu' />
                      <div className="toggle-menu10">
                        {Data8.map((item) =>
                          <div className={item.class} key={item.id}>
                            <ul>
                              <li className='br-btn'><a href='/' className='hyper-link'>{item.hyper}</a></li>
                              <ul className='list-link'>
                                <li ><a href='/' className='link-toggle'>{item.link1}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link2}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link3}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link4}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link5}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link6}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link7}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link8}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link9}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link10}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link11}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link12}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link13}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link14}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link15}</a></li>
                              </ul>
                            </ul>
                          </div>
                        )}
                      </div>
                      Computing</Nav.Link>
                    <Nav.Link href="/Sporting-Goods"><CgGym className='icon-menu' />
                      <div className="toggle-menu11">
                        {Data9.map((item) =>
                          <div className={item.class} key={item.id}>
                            <ul>
                              <li className='br-btn'><a href='/' className='hyper-link'>{item.hyper}</a></li>
                              <ul className='list-link'>
                                <li ><a href='/' className='link-toggle'>{item.link1}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link2}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link3}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link4}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link5}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link6}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link7}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link8}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link9}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link10}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link11}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link12}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link13}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link14}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link15}</a></li>
                              </ul>
                            </ul>
                          </div>
                        )}
                      </div>
                      Sporting Goods</Nav.Link>
                    <Nav.Link href="/Gaming"><CgGames className='icon-menu' />
                      <div className="toggle-menu12">
                        {Data10.map((item) =>
                          <div className={item.class} key={item.id}>
                            <ul>
                              <li className='br-btn'><a href='/' className='hyper-link'>{item.hyper}</a></li>
                              <ul className='list-link'>
                                <li ><a href='/' className='link-toggle'>{item.link1}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link2}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link3}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link4}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link5}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link6}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link7}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link8}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link9}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link10}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link11}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link12}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link13}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link14}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link15}</a></li>
                              </ul>
                            </ul>
                          </div>
                        )}
                      </div>
                      Gaming</Nav.Link>
                    <Nav.Link href="/Other-categories"><BsPlusCircle className='icon-menu' />
                      <div className="toggle-menu13">
                        {Data11.map((item) =>
                          <div className={item.class} key={item.id}>
                            <ul>
                              <li className='br-btn'><a href='/' className='hyper-link'>{item.hyper}</a></li>
                              <ul className='list-link'>
                                <li ><a href='/' className='link-toggle'>{item.link1}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link2}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link3}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link4}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link5}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link6}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link7}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link8}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link9}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link10}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link11}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link12}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link13}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link14}</a></li>
                                <li ><a href='/' className='link-toggle'>{item.link15}</a></li>
                              </ul>
                            </ul>
                          </div>
                        )}
                      </div>
                      Other categories</Nav.Link>
                  </div>
                </div>
   </>
  )
}
